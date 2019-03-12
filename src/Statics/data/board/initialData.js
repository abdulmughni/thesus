const initialData = {
    tasks: {
        'task-1': { 
            id: 'task-1', 
            title: 'Create Azure Departments 1',
            content: 'Create Azure Departments in Enterprise' 
        },
        'task-2': { 
            id: 'task-2', 
            title: 'Create Azure Departments 2',
            content: 'Create Azure Departments in Enterprise' 
        },
        'task-3': { 
            id: 'task-3', 
            title: 'Create Azure Departments 3',
            content: 'Create Azure Departments in Enterprise' 
        },
        'task-4': { 
            id: 'task-4', 
            title: 'Create Azure Departments 4',
            content: 'Create Azure Departments in Enterprise' 
        },
        'task-5': { 
            id: 'task-5',
            title: 'Create Azure Departments 5',
            content: 'Create Azure Departments in Enterprise' 
        },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Create Subscription Model',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4', 'task-5']
        },
        'column-2': {
            id: 'column-2',
            title: 'Integrate Directory Services',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Implement Network',
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData;
