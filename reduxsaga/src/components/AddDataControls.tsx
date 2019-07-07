import React, { FC, useState, ChangeEvent } from 'react';

import { connect } from 'react-redux';

interface IAddDataControls {
  number: number,
  numberSaga: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const AddDataControls: FC<IAddDataControls> = props => {
  const { number, numberSaga } = props;
  const [node, setNode] = useState('');
  const [edge, setEdge] = useState('');

  const nodeInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNode(e.target.value.toUpperCase());
  }

  const edgeInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setEdge(e.target.value.toUpperCase());
  }

  return (
    <div className='addNodes'>
      <input
        className='addNodeInput'
        placeholder='Add Node'
        onChange={nodeInputChange}
        value={node}
      />
      <input
        className='addEdgeInput'
        placeholder='Add Edge'
        onChange={edgeInputChange}
        value={edge}
      />

      <button onClick={numberSaga}>Number clicker</button>
      {number}
    </div>
  );
}

const mapStateToProps = (state: { number: { numberState: number } }) => {
  return {
    number: state.number.numberState
  };
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    numberSaga: () => dispatch({ type: 'FETCH_NUMBER' })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDataControls);