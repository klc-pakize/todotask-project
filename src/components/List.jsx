import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";

import "./List.css";
const List = ({ data, setData }) => {
  const handleDelete = (id) => {
    const dataDelete = data.filter((del) => id !== del.id);
    localStorage.setItem("listData", JSON.stringify(dataDelete));
    setData(dataDelete);
  };

  const handleTop = (id, top) => {
    const topArray = [];
    data.map((dataTop) => {
      if (id === dataTop.id) {
        topArray.push({ ...dataTop, top: !top });
      } else {
        topArray.push(dataTop);
      }
      localStorage.setItem("listData", JSON.stringify(topArray));
      setData(topArray);
    });
  };
  return (
    <div className="con2">
      <ListGroup as="ul" className="con1">
        {data.map((todo, index) => {
          const { id, task, date, top } = todo;
          return (
            <ListGroup.Item
              key={index}
              as="li"
              className="li  d-flex justify-content-between align-items-start "
            >
              <div
                onClick={() => handleTop(id, top)}
                className={todo.top ? "text-decoration-line-through" : ""}
              >
                <div className="li-task fw-bold">{task}</div>
                <div className="li-date fw-bold">{date}</div>
              </div>

              <Button className="delete" onClick={() => handleDelete(todo.id)}>
                X
              </Button>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    </div>
  );
};

export default List;
