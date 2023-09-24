import { Card, CardBody } from "@chakra-ui/react";
import { CircleChart } from "../datas/CircleChart";

function ChartCard() {
    return (
        <Card>
          <CardBody>
            <CircleChart values={[2, 1, 2, 1]} size="100%"/>
          </CardBody>
        </Card>
    );
}

export default ChartCard;