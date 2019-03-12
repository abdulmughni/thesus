import React, { Component } from 'react';
import { Layout, Icon, message, Modal } from 'antd';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import Header from './Header';
import Column from './Columns';
import BoardForm from './Forms/BoardForm';

import initialData from '../../../../Statics/data/board/initialData.js';

const { Content } = Layout;
  
class Boards extends Component {
  state = initialData;

  componentDidMount() {
    const { checkRoute } = this.props;

    checkRoute('Boards')
  }

  showModal = () => {
      this.setState({
          visible: true
      });
  }

  handleCancel = (e) => {
      this.setState({
          visible: false
      });
  }

  onDragStart = result => {
    console.log(result)
  }

  onDragUpdate = result => {
    console.log(result)
  }

  onDragEnd = result => {
    const { draggableId, source, destination, type } = result;
    const { columns, columnOrder } = this.state;

    if (!destination) {
      return;
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return;
    }

    if(type === 'columns') {
      const newColumnOrder = Array.from(columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder
      }

      this.setState(newState);
      message.success('Column Reordered Successfully');
      return;
    }

    const start = columns[source.droppableId];
    const finish = columns[destination.droppableId];

    // Moving tasks in same columns
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      }

      const newState = {
        ...this.state,
        columns: {
          ...columns,
          [newColumn.id]: newColumn
        }
      }

      this.setState(newState);
      message.success('Tasks Reordered Successfully');
      return;
    }

    // Moving tasks from one column to other columns
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);

    const newStart = {
      ...start,
      taskIds: startTaskIds
    }
    
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId)

    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    }

    const newState = {
      ...this.state,
      columns: {
        ...columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    }

    this.setState(newState)
    message.success('Tasks Reordered Successfully');
  }
  
  render() {
      const { tasks, columns, columnOrder, visible } = this.state;

      return(
        <div>
            <Header />
            <Content className="p-20">              
              <DragDropContext 
                  onDragStart={this.onDragStart}
                  onDragUpdate={this.onDragUpdate}
                  onDragEnd={this.onDragEnd}
                >
                  <Droppable droppableId="all-columns" direction="horizontal" type="columns">
                    {(provided) => (
                      <div className="boards-row"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        {
                          columnOrder.map((columnId, index) => {
                            const column = columns[columnId];
                            const task = column.taskIds.map((taskId) => tasks[taskId])
                              
                              return (
                                <Column key={column.id} column={column} task={task} index={index} />
                              )
                            
                          })
                        }
                        { provided.placeholer }
                        <div className="button-transparent add-board-button" onClick={this.showModal}>
                            <Icon type="plus" /> Add Board
                        </div>
                        <Modal
                            width={1000}
                            visible={visible}
                            onCancel={this.handleCancel}
                            footer={false}
                            >
                            <BoardForm handleCancel={this.handleCancel} />
                        </Modal>
                      </div>                      
                    )}                    
                  </Droppable>
              </DragDropContext>              
            </Content>
        </div>
      )
  }
}

export default Boards;
