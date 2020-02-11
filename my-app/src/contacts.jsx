import React from 'react';
 
const Ninjas = ({ninjas}) => {
    //console.log(this.props)
    //const {name, age, sword} = this.props;
    //const {ninjas} = props
    const ninjaList = ninjas.map(ninja => 
        {
            if(ninja.age > 20)
            {
                return (
                    <div className='ninja' key={ninja.id}>
                        <div>Name: {ninja.name}</div>
                        <div>Age: {ninja.age}</div>
                        <div>Sword: {ninja.sword}</div>
                    </div>
                )
            } else { return null }
        })
    return (
        <div className='ninjaList'>
            { ninjaList }
        </div>
    )
}

export default Ninjas