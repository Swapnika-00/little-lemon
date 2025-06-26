import Card from './Card'

function WeekSpecials(){
        return(
            <>
            <h2>This weeks Specials!</h2>
            <div className='cards'>
            <Card image="/greekSalad.jpg" title="Greek Salad" content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished wiith crunchy garlic and rosemary croutons" price="$12.00"></Card>
            <Card title="Bruschetta" content="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."></Card>
            <Card title="Lemon Dessert" content="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined"></Card>
            </div>
            </>
        )
}
export default WeekSpecials;