import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Col, Card, Image } from 'react-bootstrap';
import star from '../assets/star.png';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({ device }) => {
  const navigate = useNavigate(); // Нужен для того чтобы открыть отдельно каждый элемент в списке

  return (
    <Col md={3} className="mt-5" onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}>
      <Card style={{ width: 150, cursor: 'pointer', border: 'light' }}>
        <Image width={150} height={150} src={'http://localhost:5000/' + device.img} />
        <div className=" text-black-50 d-flex mt-1 justify-content-between align-items-center">
          <div>Anime</div>
          <div className="d-flex align-items-center ">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};

// для react-router-dom v6:
// import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();
// onClick={() => navigate(`${DEVICE_ROUTE}/${device.id}`)}

// вместо useHistory

export default DeviceItem;
