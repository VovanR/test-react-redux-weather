import React, {Component, PropTypes} from 'react';

import './index.css';
import CitySearchListItem from './CitySearchListItem';

class CitySearchList extends Component {
  constructor(props) {
    super(props);
    this.handleClickItem = this.handleClickItem.bind(this);
  }

  handleClickItem(id) {
    this.props.onClickCity(id);
  }

	render() {
		const {data} = this.props;

		return (
      <ul>
        {data.map(item => (
          <CitySearchListItem
            key={item.id}
            id={item.id}
            name={item.name}
            onClick={this.handleClickItem}
            />
        ))}
      </ul>
		);
	}
}
CitySearchList.propTypes = {
  data: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired
};
// CitySearchList.defaultProps = {
// };

export default CitySearchList;
