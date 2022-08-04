import React, { useState, useContext } from 'react';
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap';
import { createDevice, fetchBrand, fetchDevice, fetchTypes } from '../../http/deviceAPI';
import { observer } from 'mobx-react-lite';

import { Context } from '../../index';

const CreateDevice = observer(({ show, onHide }) => {
  const { device } = useContext(Context);
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState(0);
  const [file, setFile] = React.useState(null);
  const [brand, setBrand] = React.useState();
  const [type, setType] = React.useState();
  const [info, setInfo] = useState([]);

  React.useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrand().then((data) => device.setBrands(data));
    fetchDevice().then((data) => device.setDevice(data.rows));
  }, []);

  const addInfo = () => {
    setInfo([...info, { titlle: '', desription: '', number: Date.now() }]);
  };
  const removeInfo = (number) => {
    setInfo(info.filter((i) => i.number !== number));
  };

  const changeInfo = (key, value, number) => {
    setInfo(info.map((i) => (i.number === number ? { ...i, [key]: value } : i)));
  };

  const selectFile = (e) => {
    console.log(e.target.files[0]);
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', `${price}`);
    formData.append('img', file);
    formData.append('brandId', device.selectedBrand.id);
    formData.append('typeId', device.selectedType.id);
    formData.append('info', JSON.stringify(info));
    createDevice(formData).then((data) => onHide());
  };

  return (
    <Modal onHide={onHide} show={show} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Добавить новое устройство</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{device.SelectedType || 'Выберите тип'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map((type) => (
                <Dropdown.Item onClick={() => device.setSelectedType(type)} key={type.id}>
                  {type.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>{device.SelectedBrand || 'Выберите бренд'}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map((brand) => (
                <Dropdown.Item onClick={() => device.setSelectedBrand(brand)} key={brand.id}>
                  {brand.name}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-3">
            <Dropdown.Toggle>Выберите устройство</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.device.map((device) => (
                <Dropdown.Item key={device.id}>{device.name}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="mt-3"
            placeholder="Введите название устройства"
          />
          <Form.Control
            onChange={(e) => setPrice(Number(e.target.value))}
            value={price}
            type="number"
            className="mt-3"
            placeholder="Введите стоимость устройства"
          />
          <Form.Control type="file" className="mt-3" onChange={selectFile} />
          <hr />
          <Button onClick={addInfo} variant="outline-success">
            Добавить новое свойство
          </Button>
          {info.map((i) => (
            <Row key={i.number} className="mt-2">
              <Col md={4}>
                <Form.Control
                  onChange={(e) => changeInfo('title', e.target.value, i.number)}
                  value={i.title}
                  placeholder="Введите название свойства"
                />
              </Col>
              <Col md={4}>
                <Form.Control
                  onChange={(e) => changeInfo('description', e.target.value, i.number)}
                  value={i.description}
                  placeholder="Введите описание свойства"
                />
              </Col>
              <Col md={4}>
                <Button onClick={() => removeInfo(i.number)} variant="outline-danger">
                  {' '}
                  Удалить
                </Button>
              </Col>
            </Row>
          ))}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Закрыть
        </Button>
        <Button variant="outline-success" onClick={addDevice}>
          Добавить
        </Button>
      </Modal.Footer>
    </Modal>
  );
});

export default CreateDevice;
