import React, { FC } from 'react';

const EventsExample: FC = () => {
  const [value, setValue] = React.useState<string>('');
  const [isDrag, setIsDrag] = React.useState<boolean>(false);
  const inputRef = React.useRef<HTMLInputElement>(null);

  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  function clickHandler(e: React.MouseEvent<HTMLButtonElement>) {
    console.log(inputRef.current?.value);
  }

  function dragHandler(e: React.DragEvent<HTMLDivElement>) {

  }

  function dropHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDrag(true)
  }

  function leaveHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDrag(false)
  }
  
  function dragWithPreventHandler(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault()
    setIsDrag(true)
  }

  return (
    <div>
      <input value={value} onChange={changeHandler} type="text" placeholder='Управляемый '/>
      <input ref={inputRef} type="text" placeholder='Неуправляемый '/>
      <button onClick={clickHandler}>test</button>
      <div draggable onDrag={dragHandler} style={{ width: 100, height: 100, background: 'red' }}></div>
      <div onDrop={dropHandler} onDragLeave={leaveHandler} onDragOver={dragWithPreventHandler} style={{ width: 100, height: 100, background: isDrag === true ? 'blue' : 'red', marginTop: 10 }}></div>
      <div style={{ width: 100, height: 100, background: 'red', marginTop: 10 }}></div>
      <div style={{ width: 100, height: 100, background: 'red', marginTop: 10 }}></div>
    </div>
  );
};

export default EventsExample;
