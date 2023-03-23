import Button from './Button'
function WideCard(props) {
    return (
        <div className="mb-2 py-8 text-center">
            <h1 className="text-3xl">
                {props.top
                    ? 'Find it first on Indiegogo'
                    : 'Clever Things For Curious Humans™ '}
            </h1>
            <h1 className="my-4">
                {props.top
                    ? 'Indiegogo is where early adopters and innovation seekers find lively, imaginative tech before it hits the mainstream.'
                    : 'There is no better place to start the hunt for something new and special. Begin on Indiegogo to find clever and unconventional things that solve everyday problems large and small. '}
            </h1>
            <div className="mt-4">
                <Button solid> SIGN UP NOW</Button>
                <Button outline> LEARN MORE</Button>
            </div>
        </div>
    )
}

export default WideCard
