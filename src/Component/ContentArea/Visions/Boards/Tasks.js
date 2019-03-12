import React, { Component } from 'react';
import { Avatar, Icon, Modal } from 'antd';

import { Draggable } from 'react-beautiful-dnd';

import ObjectiveForm from './Forms/ObjectiveForm';

import P3 from '../../../../Statics/images/peoples/p3.png';
import P4 from '../../../../Statics/images/peoples/p4.png';
  
class Tasks extends Component {
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
      const { task, index } = this.props;
      const { visible } = this.state;

      return(
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => {                
                return (
                <div className={snapshot.isDragging ? 'board-task move-task' : 'board-task'}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <Icon type="setting" theme="filled" className="edit-task-icon" onClick={this.showModal} />
                    <div className="t-title">{task.title}</div>
                    <div className="t-content">{task.content}</div>
                    <div className="t-calendar"><Icon type="calendar" /> 02 - 21</div>
                    
                    <div className="two-flex-box">
                        <div className="flex-box-col">
                            <div className="status-circle"><span className="progress"></span> In Progress</div>
                        </div>

                        <div className="flex-box-col">
                            <div className="task-peoples">
                                <Icon type="ellipsis" className="dotted-last" />
                                <Avatar src={P3} />
                                <Avatar src={P4} />
                                <Icon type="user-add" className="add-user" />
                            </div>
                        </div>
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
            )}}
        </Draggable>    
      )
  }
}

export default Tasks;
