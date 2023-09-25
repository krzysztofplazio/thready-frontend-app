import { Card, CardBody, Text } from "@chakra-ui/react";
import { CircleChart } from "../../datas/CircleChart";

function ChartCard() {
    return (
        <Card>
          <CardBody>
                <Text fontSize='2xl'
                            sx={{
                            textTransform: 'uppercase',
                            letterSpacing: 2,
                            marginBottom: 3,
                      }}>
                    Statusy
                </Text>
                <div style={{ margin: '0 auto', width: '70%' }}>
                  <CircleChart values={[2, 1, 2, 1]} size="100%"/>
                </div>
          </CardBody>
        </Card>
    );
}

export default ChartCard;