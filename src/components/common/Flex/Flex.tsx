import { ForwardedRef, HTMLAttributes, forwardRef } from 'react';

import type { CommonPropsWithChuldren } from '../../../@types';
import * as S from './Flex.styled';

interface FlexProps extends S.FlexStyledProps, CommonPropsWithChuldren, HTMLAttributes<HTMLElement> {
	tag?: keyof JSX.IntrinsicElements;
}

const Flex = forwardRef<HTMLElement, FlexProps>((props, ref) => {
	const {
		$alignItems = 'flex-start',
		$direction = 'row',
		$flexWrap = 'nowrap',
		$fullWidth,
		$gap,
		$height = 'auto',
		$justifyContent = 'flex-start',
		$width = 'auto',
		children,
		className,
		style,
		tag = 'div',
		...rest
	} = props;

	const styledProps: S.FlexStyledProps = {
		$alignItems,
		$direction,
		$flexWrap,
		$fullWidth,
		$gap,
		$height,
		$justifyContent,
		$width
	};

	return (
		<S.FlexStyled
			ref={ref as ForwardedRef<HTMLDivElement>}
			as={tag}
			className={className}
			style={style}
			{...styledProps}
			{...rest}
		>
			{children}
		</S.FlexStyled>
	);
});

Flex.displayName = 'Flex';

export default Flex;