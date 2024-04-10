import Image from "next/image";
import "./table.css";

export default function Table() {
  return (
    <>
      <div className="table_div_main">
        <div className="table_name">
          <span className="table_name_span">Table 1</span>
        </div>

        <div className="table_div">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>#</th>
                <th>#</th>
                <th>#</th>
                <th>#</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>ugr</td>
                <td>ugr</td>
                <td>ugr</td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
