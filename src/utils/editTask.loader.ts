import { getTask } from "./task.util";

/**
 * Asynchronously loads the task with the given ID and returns it along with the ID.
 * @param params - An object containing the ID of the task to load.
 * @returns An object containing the loaded task and its ID.
 */
export async function loader({ params }: any) {
  const task = await getTask(params.id);
  const id = params.id;

  return { task, id };
}
