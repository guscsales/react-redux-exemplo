import React from 'react';
import { connect } from 'react-redux';
import './heroes.css';
import { setHeroAction, removeHeroAction } from '../../action-creators/heroes';

class Heroes extends React.Component {
  constructor(props) {
    super(props);

    this.state = { currentHero: '' };

    this.setHero = this.setHero.bind(this);
  }

  setHero() {
    this.props.setHero({ name: this.state.currentHero });
  }

  removeHero(i) {
    this.props.removeHero(i);
  }

  render() {
    const { heroes } = this.props;

    return (
      <div className="app">
        <header className="header">
          <h1 className="title">React com Redux - Lista de herois</h1>
        </header>
        <div>
          <input
            type="text"
            placeholder="Salvar novo heroi"
            onChange={e => {
              this.setState({
                currentHero: e.target.value
              });
            }}
          />
          <button onClick={this.setHero}>Salvar no Store</button>
        </div>
        <ul>
          {heroes.map((hero, i) => (
            <li key={i}>
              {hero.name} |{' '}
              <a
                href="javascript:void(0)"
                onClick={() => {
                  this.removeHero(i);
                }}
              >
                Remover
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  heroes: state.heroes.list
});

const mapDispatchToProps = dispatch => ({
  setHero: hero => dispatch(setHeroAction(hero)),
  removeHero: index => dispatch(removeHeroAction(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Heroes);
