import * as React from 'react';
import classNames from 'classnames';
import OutlinedCalendar from '@ant-design/icons/lib/icons/CalendarOutlined';
import OutlinedCloseCircle from '@ant-design/icons/lib/icons/CloseCircleOutlined';
import OutlinedTime from '@ant-design/icons/lib/icons/FieldTimeOutlined';
import OutlinedMinus from '@ant-design/icons/lib/icons/MinusCircleOutlined';
import { RangePicker as RCRangePicker } from '../src/index';
import { GenerateConfig } from '../src/generate/index';
import enUS from '../locale/en_US';
import { ConfigContext, ConfigConsumerProps } from '../../config-provider';
import SizeContext from '../../config-provider/SizeContext';
import LocaleReceiver from '../../locale-provider/LocaleReceiver';
import {getRangePlaceholder} from '../util';
import {RangePickerProps, PickerLocale, getTimeProps, Components} from '.';

export default function generateRangePicker<DateType>(
    generateConfig: GenerateConfig<DateType>,
): React.ComponentClass<RangePickerProps<DateType>> {
    class RangePicker extends React.Component<RangePickerProps<DateType>> {
        static contextType = ConfigContext;

        context: ConfigConsumerProps;

        pickerRef = React.createRef<RCRangePicker<DateType>>();

        // focus = () => {
        //     if (this.pickerRef.current) {
        //         this.pickerRef.current.focus();
        //     }
        // };

        blur = () => {
            if (this.pickerRef.current) {
                this.pickerRef.current.blur();
            }
        };

        renderPicker = (contextLocale: PickerLocale) => {
            const locale = { ...contextLocale, ...this.props.locale };
            const { getPrefixCls, direction, getPopupContainer } = this.context;
            const {
                prefixCls: customizePrefixCls,
                getPopupContainer: customGetPopupContainer,
                className,
                size: customizeSize,
                bordered = true,
                placeholder,
                ...restProps
            } = this.props;
            const { format, showTime, picker } = this.props as any;
            const prefixCls = getPrefixCls('picker', customizePrefixCls);

            let additionalOverrideProps: any = {};

            additionalOverrideProps = {
                ...additionalOverrideProps,
                ...(showTime ? getTimeProps({ format, picker, ...showTime }) : {}),
                ...(picker === 'time' ? getTimeProps({ format, ...this.props, picker }) : {}),
            };
            const rootPrefixCls = getPrefixCls();

            return (
                <SizeContext.Consumer>
                    {size => {
                        const mergedSize = customizeSize || size;

                        return (
                            <RCRangePicker<DateType>
                                separator={
                                    <span aria-label="to" className={`${prefixCls}-separator`}>
                                        <OutlinedMinus />
                                    </span>
                                }
                                ref={this.pickerRef}
                                placeholder={getRangePlaceholder(picker, locale, placeholder)}
                                suffixIcon={picker === 'time' ? <OutlinedTime /> : <OutlinedCalendar />}
                                clearIcon={<OutlinedCloseCircle />}
                                allowClear
                                transitionName={`${rootPrefixCls}-slide-up`}
                                {...restProps}
                                {...additionalOverrideProps}
                                className={classNames(
                                    {
                                        [`${prefixCls}-${mergedSize}`]: mergedSize,
                                        [`${prefixCls}-borderless`]: !bordered,
                                    },
                                    className,
                                )}
                                locale={locale!.lang}
                                prefixCls={prefixCls}
                                getPopupContainer={customGetPopupContainer || getPopupContainer}
                                generateConfig={generateConfig}
                                prevIcon={<span className={`${prefixCls}-prev-icon`} />}
                                nextIcon={<span className={`${prefixCls}-next-icon`} />}
                                superPrevIcon={<span className={`${prefixCls}-super-prev-icon`} />}
                                superNextIcon={<span className={`${prefixCls}-super-next-icon`} />}
                                components={Components}
                                direction={direction}
                            />
                        );
                    }}
                </SizeContext.Consumer>
            );
        };

        render() {
            return (
                <LocaleReceiver componentName="DatePicker" defaultLocale={enUS}>
                    {this.renderPicker}
                </LocaleReceiver>
            );
        }
    }

    return RangePicker;
}
