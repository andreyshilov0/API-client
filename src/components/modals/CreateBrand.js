import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { createBrand } from '../../http/deviceAPI';

const CreateBrand = ({ show, onHide }) => {
  const [value, setValue] = React.useState('');
  const addBrand = () => {
    createBrand({ name: value }).then((data) => {
      setValue('');
      onHide();
    });
  };

  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить новый бренд</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Введите название типа"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addBrand}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateBrand;
