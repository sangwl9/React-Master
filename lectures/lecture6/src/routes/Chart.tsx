import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
    time_open: number;
    time_close: number;
    open: number;
    high: number;
    low: number;
    close: number;
    volume: number;
    market_cap: number;
}

interface ChartProps {
    coinId: string;
    isDark: boolean;
}

function Chart({coinId, isDark}: ChartProps){
    const { isLoading, data } = useQuery<IHistorical[]>(
        {
            queryKey: ["ohlcv", coinId],
            queryFn: () => fetchCoinHistory(coinId),
            // refetchInterval: 10000,
        });
    return (
        <div>
            {isLoading ? "Loading chart..." : 
                <ApexChart 
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data: data?.map((price) => price.close) as number[],
                        }
                    ]}
                    options={{
                        theme:{
                            mode: isDark ? "dark" : "light",
                        },
                        chart: {
                            width: 500,
                            height: 300,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",

                        },
                        grid: {
                            show: false,
                        },
                        stroke: {
                            curve: "smooth",
                            width: 3,
                        },
                        yaxis: {
                            show: false,
                        },
                        xaxis: {
                            axisBorder: {
                                show: false,
                            },
                            axisTicks: {
                                show: false,
                            },
                            labels: {
                                show: false,
                            },
                            type: "datetime",
                            categories: data?.map((price) => new Date(price.time_close * 1000).toISOString())
                        },
                        fill: {
                            type: "gradient",
                            gradient: {
                                gradientToColors: ["#0be881"],
                                stops: [0, 100],
                            },
                        },
                        colors: ["#0fbcf9"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(3)}`
                            }
                        }
                    }}
                />
            }
        </div>
    );
}

export default Chart;