import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ name, favoriteNumber, children }) => {
  return (
    <div>
      <h1>나의 새롭고 멋진 컴포넌트</h1>
      <h2>안녕하세요, 제 이름은 {name} 입니다.</h2>
      <h2>children 값은 {children} 입니다.</h2>
      <h2>제가 좋아하는 숫자는 {favoriteNumber} 입니다.</h2>
    </div>
  );
};

MyComponent.defaultProps = {
  name: '기본이름',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};

export default MyComponent;
