import React, { Component } from 'react';
import { Icon, Modal } from 'antd';

import { Droppable, Draggable } from 'react-beautiful-dnd';

import Tasks from './Tasks';
import ObjectiveForm from './Forms/ObjectiveForm';
  
class Columns extends Component {
    state = {
        visible: false
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

    render() {
      const { column, task, index } = this.props;
      const { visible } = this.state;

      return(
        <Draggable draggableId={column.id} index={index}>
            {(provided) => (
                <div className="board-column"
                    {...provided.draggableProps}
                    ref={provided.innerRef}
                >
                    <h3 {...provided.dragHandleProps} className="board-title">{column.title}</h3>
                    
                    <Droppable droppableId={column.id} type="tasks">
                        {(provided, snapshot) => (
                            <div className={snapshot.draggingOverWith ? 'column-tasks-area move-bg' : 'column-tasks-area'}
                                ref={provided.innerRef}
                                {...provided.droppableProps}                        
                            >
                                {
                                    task.map((task, index) => {
                                        return (
                                            <Tasks key={task.id} index={index} task={task} />
                                        )
                                    })
                                }
                                { provided.placeholder }
                            </div>
                        )}
                    </Droppable>    

                    <div className="button-transparent text-center" onClick={this.showModal}>
                        <Icon type="plus" /> Add Objective
                    </div>
                    <Modal
                        width={1000}
                        visible={visible}
                        onCancel={this.handleCancel}
                        footer={false}
                        >
                        <ObjectiveForm handleCancel={this.handleCancel} />
                    </Modal>
                </div>
            )}                  
        </Draggable>    
      )
    }
}

export default Columns;
