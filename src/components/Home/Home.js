import React, { useEffect, useState } from "react";
import sliderLogo from "../../assets/images/Illustration.png";
import Task from "../Task/Task";


const Home = () => {
  const task = [
    {
      name: "Child Support",
      pic: "newBooks.png",
    },
    {
      name: "babySit",
      pic: "babySit.png",
    },
    {
      name: "animalShelter",
      pic: "animalShelter.png",
    },
    {
      name: "childSupport",
      pic: "childSupport.png",
    },
    {
      name: "Morder pyschology",
      pic: "Morder pyschology.png",
    },
    {
      name: "libraryBooks",
      pic: "libraryBooks.png",
    },
    {
      name: "studyGroup",
      pic: "studyGroup.png",
    },
    {
      name: "stuffedAnimals",
      pic: "stuffedAnimals.png",
    },
    {
      name: "voteRegister",
      pic: "voteRegister.png",
    },
    {
      name: "clearnPark",
      pic: "clearnPark.png",
    },
  ];
  const [p, s] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => s(data));
  }, []);
  
  console.log(p);
  const handleAddProduct = async () => {
    await fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },

      body: JSON.stringify(task),
    });
  };

  return (
    <div>
      <section className="mt-5  ">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active border rounded panda-bg-info p-5">
              <div className="row">
                <div className="col-lg-7 d-flex align-items-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque est dignissimos maxime veritatis tempora atque aperiam.
                  Atque esse suscipit, pariatur expedita cumque perspiciatis
                  aspernatur consequuntur accusamus sequi nulla ullam optio.
                </div>
                <div className="col-lg-5">
                  <img src={sliderLogo} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item active border rounded panda-bg-info p-5">
              <div className="row">
                <div className="col-lg-7 d-flex align-items-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque est dignissimos maxime veritatis tempora atque aperiam.
                  Atque esse suscipit, pariatur expedita cumque perspiciatis
                  aspernatur consequuntur accusamus sequi nulla ullam optio.
                </div>
                <div className="col-lg-5">
                  <img src={sliderLogo} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
            <div className="carousel-item active border rounded panda-bg-info p-5">
              <div className="row">
                <div className="col-lg-7 d-flex align-items-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque est dignissimos maxime veritatis tempora atque aperiam.
                  Atque esse suscipit, pariatur expedita cumque perspiciatis
                  aspernatur consequuntur accusamus sequi nulla ullam optio.
                </div>
                <div className="col-lg-5">
                  <img src={sliderLogo} className="d-block w-100" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>
      <br />
      {/* <button onClick={handleAddProduct}>Add product</button>
      <input type="text" placeholder="search" /> */}
      {task.map((task) => (
        <Task key={task.name} task={task}></Task>
      ))}
    </div>
  );
};

export default Home;
