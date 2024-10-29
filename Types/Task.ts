export interface TaskProps {
  id: string,
  title: string,
  statusDone: boolean,
  removeTask?: () => void,
  doneTask?: () => void,
}