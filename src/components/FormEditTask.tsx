type FormAddTaskProps = {
  setTask: (task: string) => void;
  addTask: () => void;
};

/**
 * @description Form for adding a task to the database
 * @version 1.0.0
 */
export default function FormAddTask({ setTask, addTask }: FormAddTaskProps) {
  return (
    <>
      <form>
        <div className="flex gap-2">
          <input
            className="text-black p-2"
            type="text"
            placeholder="What do you have to do today?"
            onChange={(e) => setTask(e.target.value)}
          />

          <button type="submit" onClick={addTask}>
            add task
          </button>
        </div>
      </form>
    </>
  );
}
