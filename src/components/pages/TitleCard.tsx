import { Card, CardBody, Text } from "@chakra-ui/react";

function TitleCard({ id, text }: IProjectTitle) {
    return (
        <Card>
            <CardBody  paddingTop='0'>
                <Text fontSize='7xl' style={{
                    margin: 0,
                    textTransform: 'uppercase',
                    letterSpacing: '3px',
                    fontWeight: 'bold',
                    }}
                >
                    Projekt {id}
                </Text>
                <Text fontSize='2xl'>{text}</Text>
            </CardBody>
        </Card>
    )
}

export default TitleCard;