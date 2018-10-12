import { ISupplyStrategy } from '../../../../models/strategy/supplyStrategy.model';
import { ZeroSupplyStrategy } from '../../common/strategies/supply/zeroSupply.strategy';
import { Sold2SupplyStrategy } from '../../common/strategies/supply/sold2Supply.strategy';
import { Sold3SupplyStrategy } from '../../common/strategies/supply/sold3Supply.strategy';
import { INumericConfig } from 'src/app/models/strategy/numericConfig.model';

export const SupplyStrategies: ISupplyStrategy[] = [
    new ZeroSupplyStrategy(),
    new Sold2SupplyStrategy(),
    new Sold3SupplyStrategy()
];

export const MinSupplies: INumericConfig[] = [
    { name: '0', shortName: '0', value: 0 },
    { name: '10', shortName: '10', value: 10 }
];

export const MaxSupplyValues: INumericConfig[] = [
    { name: '$1 000 000', shortName: '1m', value: 1000000 },
    { name: '$10 000 000', shortName: '10m', value: 10000000 },
    { name: '$100 000 000', shortName: '100m', value: 100000000 },
    { name: '$1 000 000 000', shortName: '1b', value: 1000000000 },
    { name: '$10 000 000 000', shortName: '10b', value: 10000000000 }
];
