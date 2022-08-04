import React, { useContext } from 'react';
import { Context } from '../index';
import { observer } from 'mobx-react-lite';
import { Card, Col } from 'react-bootstrap';

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <>
      <Col className="d-flex">
        {device.brands.map((brand) => (
          <Card
            style={{ cursor: 'pointer' }}
            onClick={() => device.setSelectedBrand(brand)}
            className="p-3 m-3"
            key={brand.id}
            border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}>
            {brand.name}
          </Card>
        ))}
      </Col>
    </>
  );
});

export default BrandBar;
