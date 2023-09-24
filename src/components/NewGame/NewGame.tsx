import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { newGame } from "../../services/GameService";
import { userIdState } from "../../state/UserIdState";
import FormButton from "../FormButton";

type FormData = {
  name: string;
};

const NewGamePage = () => {
  // userId must be non-null for the user to access this page (child of AuthRequired)
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const userId = useRecoilValue(userIdState)!;
  const { handleSubmit, register } = useForm<FormData>({ mode: "onSubmit" });
  const navigate = useNavigate();

  const onSubmit = ({ name }: FormData) => {
    newGame(name, userId)
      .then((id) => navigate(`/games/${id}`))
      .catch(console.log);
  };

  return (
    <div className="bg-white rounded-lg p-1">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col p-1 space-y-2 text-sm">
          <div className="flex flex-col">
            <label htmlFor="name">Name</label>
            <input
              className="rounded border shadow px-1"
              type="text"
              {...register("name", { required: true })}
            />
          </div>
          <div>
            <FormButton type="submit" value="Create" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewGamePage;
