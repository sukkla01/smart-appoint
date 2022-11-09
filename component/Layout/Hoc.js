import React from 'react'
import Header_ from './Header_'
import Menu_ from './Menu_'

const Hoc = (props) => {
    return (
        <div>
            {/* <Header_ /> */}
            <Header_ style={{ marginTop : 20 }}/>
            {/* <Menu_ /> */}
            <div className="content content--top-nav" style={{ marginLeft:15,marginRight:15,marginTop:160}}>
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 2xl:col-span-12">
                        {props.children}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Hoc