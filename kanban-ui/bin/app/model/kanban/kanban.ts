import { Task } from '../task/task';

export class Kanban {

    id: number;
    title: String;
    createdDate: Date;
    tasks: Task[];
}
