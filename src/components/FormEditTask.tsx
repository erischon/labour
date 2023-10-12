import { useTaskContext } from "../contexts/TaskContext";

type FormEditTaskProps = {
  setTask: (task: string) => void;
  addTask: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  onClose: () => void;
};

/**
 * @description Form for adding a task to the database
 * @version 1.0.0
 */
export default function FormEditTask({
  setTask,
  addTask,
  onClose,
}: FormEditTaskProps) {
  const { setIsModified } = useTaskContext();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addTask(e);
    setIsModified(true);
    onClose();
  };

  return (
    <>
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            className="text-black p-2 w-96"
            type="text"
            placeholder="What do you have to do today?"
            onChange={(e) => setTask(e.target.value)}
          />

          <button
            type="submit"
            className="bg-slate-700 text-slate-100 py-2 px-6"
          >
            Edit task
          </button>
        </div>
      </form>
    </>
  );
}
