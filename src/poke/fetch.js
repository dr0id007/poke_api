import React, { Component } from "react";
import { connect } from "react-redux";
import Proptypes from "prop-types";

const mmm = function mapStateToProps(state) {
  return {
    name: state
  };
};

class fetch1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      data: [],
      ability: [],
      img: []
    };
    // this.fetch_data = this.fetch_data.bind(this);
  }

  componentDidUpdate(props) {
    if (this.state.name !== props.name) {
      console.log("function iii called..!!", props.name);
      try {
        fetch("https://pokeapi.co/api/v2/pokemon/" + this.props.name)
          .then(data => {
            return data.json();
          })
          .then(data => {
            console.log("data:-", data);

            // const img = data.spirities.front_default;

            let ss = (
              <div className="ui container">
                <hr className="ui basic divider" />
                <p>name:-{data.name}</p>
                <p>
                  abilities:-{data.abilities[0].ability.name} ,{" "}
                  {data.abilities[1].ability.name}
                </p>
                <p>weight:-{data.weight}</p>
                <p>height:-{data.height}</p>
                <p>Base Exp:-{data.base_experience}</p>
                <p>Index:-{data.game_indices[0].game_index}</p>

                <hr className="ui divider basic" />
              </div>
            );
            this.setState({
              data: ss,
              name: props.name,
              ability: []
            });
          });
      } catch (error) {
        console.log("error:-", error);
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.ability}

        {this.state.data}
      </div>
    );
  }
}

// const iii = function map(props) {
//   let some = [];
//   console.log("function iii called..!!", props.name);
//   try {
//     fetch("https://pokeapi.co/api/v2/pokemon/" + props.name)
//       .then(data => {
//         return data.json();
//       })
//       .then(data => {
//         console.log("data:-", data);
//         const ss = (
//           <div>
//             <p>name:-{data.name}</p>
//             <p>weight:-{data.weight}</p>
//             <p>height:-{data.height}</p>
//           </div>
//         );
//         some = ss;
//       });
//   } catch (error) {
//     console.log("error:-", error);
//   }
//   return (
//     <div>
//       {some}
//       <h2>in the help</h2>
//     </div>
//   );
// };

export default connect(
  mmm,
  null
)(fetch1);
