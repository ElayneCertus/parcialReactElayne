
import './colorChange.css'

export const ColorChange = ({color}) => {

    const stylo = { 
        backgroundColor: color,
      };

    return (
        <div class="styloCuadradito" style={stylo}>ColorChange</div>
    )
}