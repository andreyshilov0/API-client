import React, { useContext } from 'react';

import { observer } from 'mobx-react-lite';
import { Context } from '../index';
import { ListGroup } from 'react-bootstrap';

const TypeBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <>
      <ListGroup>
        {device.types.map((type) => (
          <ListGroup.Item
            style={{ cursor: 'pointer' }}
            active={type.id === device.selectedType.id}
            onClick={() => device.setSelectedType(type)} // С помощью mobx сделали функцию которая при клике выделяет нужную кнопку и меняет её состояние
            key={type.id}>
            {type.name}
          </ListGroup.Item> // Берем из DeviceStore данные и выводим их тут, они там сначала статичные , далее добавим Back
        ))}
      </ListGroup>
    </>
  );
});

export default TypeBar;
