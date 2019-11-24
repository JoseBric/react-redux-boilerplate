import { shallow } from 'enzyme'
import Item from './Item'

describe('<Item />', () => {
  const wrapper = shallow(<Item />)

  it('should render a div', () => {
    expect(wrapper.contains(<div></div>)).toBe(true)
  })
})
