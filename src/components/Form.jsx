import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import List from "./List";
import "./Form.css";
function Forms() {
  const [forms, setForms] = useState({
    task: "",
    id: "",
    date: "",
    top: false,
  });
  console.log("forms", forms);

  //verileri yeni bir arr içine attık
  const [data, setData] = useState([]);
  const handleSaveTask = (e) => {
    e.preventDefault();
    data.push({ ...forms });
    console.log("data", data);

    //inputları temizliyoruz
    setForms({
      task: "",
      date: "",
    });

    //localS verileri gönderdik
    localStorage.setItem("listData", JSON.stringify(data));
  };

  useEffect(() => {
    const newData = JSON.parse(localStorage.getItem("listData")) || [];
    console.log("newData:", newData);
    setData(newData);
  }, []);
  return (
    <div className="container">
      <div className="">
        <Form className="con" onSubmit={handleSaveTask}>
          <Form.Group>
            <Form.Label className="text-task" htmlFor="task">
              Task
            </Form.Label>
            <Form.Control
              value={forms.task}
              onChange={(e) =>
                setForms({
                  ...forms,
                  task: e.target.value,
                  id: Math.floor(Math.random() * 100000),
                })
              }
              type="text"
              placeholder="AddTask"
              id="task"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className="text-date" htmlFor="date">
              Day
            </Form.Label>
            <Form.Control
              value={forms.date}
              onChange={(e) => setForms({ ...forms, date: e.target.value })}
              type="date"
              placeholder="Add Day"
              id="date"
            />
          </Form.Group>

          <Button className="saveTask" type="submit">
            Save Task
          </Button>
        </Form>
      </div>
      <List data={data} setData={setData} />
    </div>
  );
}

export default Forms;
