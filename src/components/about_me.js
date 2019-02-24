import React from 'react';

export default class AboutMe extends React.Component {
    render(){
        return (
            <div className="about-me">
                <div>
                    <h4>BEN KİMİM ?</h4>
                    <p>Merhaba ben İsa. </p>
                    <p>Yolun henüz daha çok başlarında ama sürekli olarak araştırarak
                    kendisini geliştirmeye çalışan 
                    bir Front-End geliştiricisiyim. İstanbul'da yaşıyorum. Kendime web teknolojileri alanında
                    bir kariyer hedefliyorum.
                    </p>
                    <p>Şu an ve önümüzdeki uzun bir süre kendimi front-end developer olarak tanımlasam da
                        ileride full-stack developer olmak gibi hedeflerim var. Bu işlerin dışında da donanım programlama
                        konusa da ilgim olduğunu söyleyebilirim ama bu daha çok hobi gibi. :)
                    </p>                    
                </div>
            </div>
        )
    }
}