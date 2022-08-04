import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createType } from '../../http/deviceAPI';

const CreateType = ({ show, onHide }) => {
  const [value, setValue] = React.useState('');
  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить новый тип</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)} // Меняем состояние на то которое сейчас в input-е
            placeholder="Введите название типа"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addType}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateType;
