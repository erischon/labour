import FormAddTask from "../components/FormAddTask";

/**
 * Renders the AddTask component.
 * @returns JSX element
 */
export default function AddTaskPage() {
  return (
    <div className="flex justify-center w-full mt-10 px-5">
      <div>
        <h1 className="text-2xl font-bold mb-5">Add Task</h1>

        <FormAddTask />
      </div>
    </div>
  );
}
