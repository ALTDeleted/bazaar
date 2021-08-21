import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";



const Model = () => {
  

  return (
    <div>
    <header className=" bg-here text-center">
      <div className="container conatainer--narrow">
        <h1>Its happenning here!</h1>
        <p>Shop Your Style</p>
      </div>
    </header>
    <section>
      <div id="slider">
        <figure>
          <img alt="img" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" />
          <img alt="img" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" />
          <img alt="img" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" />
          <img alt="img" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" />
          <img alt="img" src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" />
        </figure>
      </div>
    </section>
    <section>
      <div className="container">
        <h2 className="text-center">Trending now</h2>
        <div className="split">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, illum recusandae maiores vitae, quae nihil molestias hic iste dolores, id harum corporis! Doloremque, expedita eum!</p>
          </div>
          <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus quasi eius cupiditate similique iusto veritatis, quod optio minus? Earum illo unde velit, cum minima modi!</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-deals">
      <div className="container">
        <div className="split">
          <div><img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Explore all" /></div>
          <div>
            <h2>Deal of the Day</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores obcaecati aut omnis, porro repellat!</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Deal of the day" />
          </div>
        </div>
      </div>
    </section>
    <section className="bg-explore">
      <div className="container">
        <div className="split">
          <div><img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80" alt="Explore all" /></div>
          <div>
            <h2>Explore for more deals</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores obcaecati aut omnis, porro repellat!</p>
          </div>
        </div>
      </div>
    </section>
    <section className="bg-deals">
      <div className="container">
        <div className="split">
          <div>
            <h2>Choose what you love</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui asperiores obcaecati aut omnis, porro repellat!</p>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1589782182703-2aaa69037b5b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80" alt="Deal of the day" />
          </div>
        </div>
      </div>
    </section>
    
    <footer className=" bg-here text-center">
      <div className="container conatainer--narrow">
        <h1>Keep in touch</h1>
        <ul>
          <li class="grow"><FaInstagram/></li>
          <li class="grow"><FaFacebookSquare/></li>
          <li class="grow"><FaGithub/></li>
          <li class="grow"><FaTwitter/></li>
          <li class="grow"><FaAmazon/></li>
        </ul>
      </div>
    </footer>
  </div>
  
  );
};

export default Model;
