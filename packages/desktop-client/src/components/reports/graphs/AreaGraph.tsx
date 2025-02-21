// @ts-strict-ignore
import React from 'react';

import { css } from 'glamor';
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  LabelList,
  ResponsiveContainer,
} from 'recharts';

import { usePrivacyMode } from 'loot-core/src/client/privacy';
import {
  amountToCurrency,
  amountToCurrencyNoDecimal,
} from 'loot-core/src/shared/util';
import { type GroupedEntity } from 'loot-core/src/types/models/reports';

import { theme } from '../../../style';
import { type CSSProperties } from '../../../style';
import { AlignedText } from '../../common/AlignedText';
import { PrivacyFilter } from '../../PrivacyFilter';
import { Container } from '../Container';
import { numberFormatterTooltip } from '../numberFormatter';

import { adjustTextSize } from './adjustTextSize';
import { renderCustomLabel } from './renderCustomLabel';

type PayloadItem = {
  payload: {
    date: string;
    totalAssets: number | string;
    totalDebts: number | string;
    totalTotals: number | string;
  };
};

type CustomTooltipProps = {
  active?: boolean;
  payload?: PayloadItem[];
  balanceTypeOp?: string;
};

const CustomTooltip = ({
  active,
  payload,
  balanceTypeOp,
}: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`${css({
          zIndex: 1000,
          pointerEvents: 'none',
          borderRadius: 2,
          boxShadow: '0 1px 6px rgba(0, 0, 0, .20)',
          backgroundColor: theme.menuBackground,
          color: theme.menuItemText,
          padding: 10,
        })}`}
      >
        <div>
          <div style={{ marginBottom: 10 }}>
            <strong>{payload[0].payload.date}</strong>
          </div>
          <div style={{ lineHeight: 1.5 }}>
            <PrivacyFilter>
              {['totalAssets', 'totalTotals'].includes(balanceTypeOp) && (
                <AlignedText
                  left="Assets:"
                  right={amountToCurrency(payload[0].payload.totalAssets)}
                />
              )}
              {['totalDebts', 'totalTotals'].includes(balanceTypeOp) && (
                <AlignedText
                  left="Debt:"
                  right={amountToCurrency(payload[0].payload.totalDebts)}
                />
              )}
              {['totalTotals'].includes(balanceTypeOp) && (
                <AlignedText
                  left="Net:"
                  right={
                    <strong>
                      {amountToCurrency(payload[0].payload.totalTotals)}
                    </strong>
                  }
                />
              )}
            </PrivacyFilter>
          </div>
        </div>
      </div>
    );
  }
};

const customLabel = (props, width, end) => {
  //Add margin to first and last object
  const calcX =
    props.x + (props.index === end ? -10 : props.index === 0 ? 5 : 0);
  const calcY = props.y - (props.value > 0 ? 10 : -10);
  const textAnchor = props.index === 0 ? 'left' : 'middle';
  const display =
    props.value !== 0 && `${amountToCurrencyNoDecimal(props.value)}`;
  const textSize = adjustTextSize(width, 'area');

  return renderCustomLabel(calcX, calcY, textAnchor, display, textSize);
};

type AreaGraphProps = {
  style?: CSSProperties;
  data: GroupedEntity;
  balanceTypeOp: string;
  compact?: boolean;
  viewLabels: boolean;
};

export function AreaGraph({
  style,
  data,
  balanceTypeOp,
  compact,
  viewLabels,
}: AreaGraphProps) {
  const privacyMode = usePrivacyMode();
  const dataMax = Math.max(...data.monthData.map(i => i[balanceTypeOp]));
  const dataMin = Math.min(...data.monthData.map(i => i[balanceTypeOp]));

  const labelsMargin = viewLabels ? 30 : 0;
  const dataDiff = dataMax - dataMin;
  //Calculate how much to add to max and min values for graph range
  const extendRangeAmount = Math.floor(dataDiff / 20);
  const labelsMin =
    //If min is zero or graph range passes zero then set it to zero
    dataMin === 0 || Math.abs(dataMin) <= extendRangeAmount
      ? 0
      : //Else add the range and round to nearest 100s
        Math.floor((dataMin - extendRangeAmount) / 100) * 100;
  //Same as above but for max
  const labelsMax =
    dataMax === 0 || Math.abs(dataMax) <= extendRangeAmount
      ? 0
      : Math.ceil((dataMax + extendRangeAmount) / 100) * 100;
  const lastLabel = data.monthData.length - 1;

  const tickFormatter = tick => {
    if (!privacyMode) return `${Math.round(tick).toLocaleString()}`; // Formats the tick values as strings with commas
    return '...';
  };

  const gradientOffset = () => {
    if (dataMax <= 0) {
      return 0;
    }
    if (dataMin >= 0) {
      return 1;
    }

    return dataMax / (dataMax - dataMin);
  };

  const off = gradientOffset();

  return (
    <Container
      style={{
        ...style,
        ...(compact && { height: 'auto' }),
      }}
    >
      {(width, height, portalHost) =>
        data.monthData && (
          <ResponsiveContainer>
            <div>
              {!compact && <div style={{ marginTop: '15px' }} />}
              <AreaChart
                width={width}
                height={height}
                data={data.monthData}
                margin={{ top: 0, right: labelsMargin, left: 0, bottom: 0 }}
              >
                {compact ? null : (
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                )}
                {compact ? null : (
                  <XAxis
                    dataKey="date"
                    tick={{ fill: theme.pageText }}
                    tickLine={{ stroke: theme.pageText }}
                  />
                )}
                {compact ? null : (
                  <YAxis
                    dataKey={balanceTypeOp}
                    domain={[
                      viewLabels ? labelsMin : 'auto',
                      viewLabels ? labelsMax : 'auto',
                    ]}
                    tickFormatter={tickFormatter}
                    tick={{ fill: theme.pageText }}
                    tickLine={{ stroke: theme.pageText }}
                  />
                )}
                <Tooltip
                  content={<CustomTooltip balanceTypeOp={balanceTypeOp} />}
                  formatter={numberFormatterTooltip}
                  isAnimationActive={false}
                />
                <defs>
                  <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset={off}
                      stopColor={theme.reportsBlue}
                      stopOpacity={0.2}
                    />
                    <stop
                      offset={off}
                      stopColor={theme.reportsRed}
                      stopOpacity={0.2}
                    />
                  </linearGradient>
                </defs>

                <Area
                  type="linear"
                  dot={false}
                  activeDot={false}
                  animationDuration={0}
                  dataKey={balanceTypeOp}
                  stroke={theme.reportsBlue}
                  fill="url(#splitColor)"
                  fillOpacity={1}
                >
                  {viewLabels && (
                    <LabelList
                      dataKey={balanceTypeOp}
                      content={e => customLabel(e, width, lastLabel)}
                    />
                  )}
                </Area>
              </AreaChart>
            </div>
          </ResponsiveContainer>
        )
      }
    </Container>
  );
}
