import { func } from 'prop-types';
import React, { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  //   const [name, setName] = useState('');
  //   const [nickname, setNickname] = useState('');
  const [state, dispatch] = useReducer(reducer, {
    name: '',
    nickname: '',
  });
  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };
  //   // componentDidMount & componentDidUpdate 를 합친 형태
  //   useEffect(() => {
  //     console.log('렌더링이 완료되었습니다.');
  //     console.log({
  //       name,
  //       nickname,
  //     });
  //     return () => {
  //       console.log('cleanup');
  //       console.log(name);
  //     };
  //   }, [name]); // 특정 값이 변경될 때만 감지

  //   // 비어있는 배열을 넣으면 마운트될 때만 실행
  //   useEffect(() => {
  //     console.log('마운트될 때만 실행됩니다.');
  //   }, []);
  //   const onChangeName = (e) => {
  //     setName(e.target.value);
  //   };
  //   const onChangeNickname = (e) => {
  //     setNickname(e.target.value);
  //   };

  return (
    <div>
      {/* <div>
        <input value={name} onChange={onChangeName} />
        <input value={nickname} onChange={onChangeNickname} />
      </div>
      <div>
        <div>
          <b>이름:</b> {name}
        </div>
        <div>
          <b>닉네임:</b> {nickname}
        </div>
      </div> */}
      <div>
        <input name="name" value={name} onChange={onChange} />
        <input name="nickname" value={nickname} onChange={onChange} />
      </div>
      <div>
        <b>이름:</b> {name}
      </div>
      <div>
        <b>닉네임:</b> {nickname}
      </div>
    </div>
  );
};

export default Info;
