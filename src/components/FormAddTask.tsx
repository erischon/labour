type FormAddTaskProps = {
  setTask: (task: string) => void;
  addTask: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

/**
 * @description Form for adding a task to the database
 * @version 1.0.0
 */
export default function FormAddTask({ setTask, addTask }: FormAddTaskProps) {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await addTask(e);
  };

  return (
    <>
      <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-2">
          <input
            className="text-black p-2"
            type="text"
            placeholder="What do you have to do today?"
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit">add task</button>
        </div>
      </form>
    </>
  );
}
