import {
  CollectionReference,
  DocumentData,
  DocumentReference,
  DocumentSnapshot,
  SnapshotOptions,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { app } from "../firebase";
import { newDeck, shuffle } from "../model/Card";
import { Game, GameData } from "../model/Game";

const gameConverter = {
  toFirestore(data: GameData): DocumentData {
    return { ...data };
  },
  fromFirestore(
    snapshot: DocumentSnapshot,
    options: SnapshotOptions
  ): GameData {
    return snapshot.data(options) as GameData;
  },
};

const GAMES = "games";

const gameRef = (gameId: string): DocumentReference<GameData> => {
  const db = getFirestore(app);
  return doc(db, GAMES, gameId).withConverter(gameConverter);
};

const gamesRef = (): CollectionReference<GameData> => {
  const db = getFirestore(app);
  return collection(db, GAMES).withConverter(gameConverter);
};

export const getGame = async (gameId: string): Promise<Game | undefined> => {
  const docRef = gameRef(gameId);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return { id: docSnap.id, ...docSnap.data() };
  }
};

export const deleteGame = async (gameId: string): Promise<void> => {
  const docRef = gameRef(gameId);
  return deleteDoc(docRef);
};

const createGame = async (gameData: GameData): Promise<string> => {
  const collectionRef = gamesRef();
  return (await addDoc(collectionRef, gameData)).id;
};

export const newGame = (name: string, uid: string): Promise<string> => {
  const deck = newDeck();
  shuffle(deck);

  return createGame({
    name,
    deck,
    dateInSecondsFromEpoch: Date.now() / 1000,
    playerIds: [uid],
  });
};

export const onGamesChange = (
  userId: string,
  cb: (games: Game[]) => void
): (() => void) => {
  const collectionRef = gamesRef();
  const q = query(
    collectionRef,
    where("playerIds", "array-contains", userId)
  ).withConverter(gameConverter);
  return onSnapshot(q, (querySnap) => {
    const games: Game[] = querySnap.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    cb(games);
  });
};
