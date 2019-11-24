import { shallow } from 'enzyme'
import Items from './Items'

describe('<Items />', () => {
  const wrapper = shallow(<Items />)

  it('should render a div', () => {
    expect(wrapper.contains(<div></div>)).toBe(true)
  })
})