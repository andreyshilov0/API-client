import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TypeBar from '../components/TypeBar';
import BrandBar from '../components/BrandBar';
import DeviceList from '../components/DeviceList';
import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { fetchBrand, fetchDevice, fetchTypes } from '../http/deviceAPI';

const Shop = observer(() => {
  const { device } = React.useContext(Context);

  React.useEffect(() => {
    fetchTypes().then((data) => device.setTypes(data));
    fetchBrand().then((data) => device.setBrands(data));
    fetchDevice().then((data) => device.setDevice(data.rows));
  }, []);

  return (
    // Col колонки с тройкой левавя панелька, с девяткой основная панелька, тобишь количество
    <Container>
      <Row className="mt-2">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
});

export default Shop;
