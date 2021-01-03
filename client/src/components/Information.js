import { Container } from "reactstrap";
import doc1 from "../assets/img/doc1.jpg";
import doc2 from "../assets/img/doc2.jpg";

const Information = () => {
  return (
    <div>
      <Container fluid>
        <div className="row m-3 d-flex align-items-center">
          <div className="col-12 col-md-6 p-5">
            <img src={doc1} alt="" width="100%" height="auto" />
          </div>
          <div className="col-12 col-md-6 text-center p-5">
            <h3 className="display-4">Specialist in Critical Care</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium atque fugiat ipsa accusamus? Rerum dolore aperiam nobis
              harum! Quam blanditiis illum dolor impedit rem eum recusandae,
              commodi quaerat quisquam ipsam doloremque expedita, praesentium
              facere illo iste tempora eius asperiores natus pariatur quod.
              Assumenda saepe sit ducimus iste, asperiores hic distinctio!
            </p>
          </div>
        </div>
        <div className="row m-3 d-flex align-items-center">
          <div className="col-12 col-md-6 text-center p-5">
            <h3 className="display-4">Specialist in Medicine</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium atque fugiat ipsa accusamus? Rerum dolore aperiam nobis
              harum! Quam blanditiis illum dolor impedit rem eum recusandae,
              commodi quaerat quisquam ipsam doloremque expedita, praesentium
              facere illo iste tempora eius asperiores natus pariatur quod.
              Assumenda saepe sit ducimus iste, asperiores hic distinctio!
            </p>
          </div>
          <div className="col-12 col-md-6 p-5">
            <img src={doc2} alt="" width="100%" height="auto" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Information;
