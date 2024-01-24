import { forwardRef } from 'react';
import { SvgIcon } from '@elementor/ui';

export const GiftIcon = forwardRef( ( props, ref ) => {
	return (
		<SvgIcon viewBox="0 0 24 24" { ...props } ref={ ref }>
			<path fillRule="evenodd" clipRule="evenodd" d="M9.65527 4.84484C8.95951 4.07178 8.20923 3.73771 7.51306 3.74984L7.5 3.75007C7.03587 3.75007 6.59075 3.93433 6.26256 4.26252C5.93437 4.59071 5.75 5.03583 5.75 5.49995C5.75 5.96408 5.93437 6.4092 6.26256 6.73739C6.59075 7.06558 7.03587 7.24995 7.5 7.24995C7.50295 7.24995 7.5059 7.24997 7.50884 7.25001H11.0002C10.6592 6.26394 10.1939 5.44328 9.65527 4.84484ZM11.25 8.75001V11.25H4C3.86193 11.25 3.75 11.1381 3.75 11V9.00001C3.75 8.86193 3.86193 8.75001 4 8.75001H11.25ZM4.25 12.75H4C3.0335 12.75 2.25 11.9665 2.25 11V9.00001C2.25 8.03351 3.0335 7.25001 4 7.25001H4.76141C4.43004 6.73144 4.25 6.12498 4.25 5.49995C4.25 4.638 4.59241 3.81135 5.2019 3.20186C5.80984 2.59392 6.63384 2.2517 7.49342 2.24996C8.72414 2.23069 9.86213 2.83242 10.7702 3.84139C11.2484 4.37275 11.6608 5.01284 12 5.73103C12.3392 5.01284 12.7516 4.37275 13.2298 3.84139C14.1379 2.83242 15.2759 2.23069 16.5066 2.24996C17.3662 2.2517 18.1902 2.59392 18.7981 3.20186C19.4076 3.81135 19.75 4.638 19.75 5.49995C19.75 6.12498 19.57 6.73144 19.2386 7.25001H20C20.9665 7.25001 21.75 8.03351 21.75 9.00001V11C21.75 11.9665 20.9665 12.75 20 12.75H19.75V19C19.75 19.7294 19.4603 20.4288 18.9445 20.9445C18.4288 21.4603 17.7293 21.75 17 21.75H7C6.27065 21.75 5.57118 21.4603 5.05546 20.9445C4.53973 20.4288 4.25 19.7294 4.25 19V12.75ZM11.25 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V12.75H11.25V20.25ZM12.75 20.25H17C17.3315 20.25 17.6495 20.1183 17.8839 19.8839C18.1183 19.6495 18.25 19.3315 18.25 19V12.75H12.75V20.25ZM12.75 11.25V8.75001H20C20.1381 8.75001 20.25 8.86193 20.25 9.00001V11C20.25 11.1381 20.1381 11.25 20 11.25H12.75ZM16.4912 7.25001C16.4941 7.24997 16.497 7.24995 16.5 7.24995C16.9641 7.24995 17.4092 7.06558 17.7374 6.73739C18.0656 6.4092 18.25 5.96408 18.25 5.49995C18.25 5.03583 18.0656 4.59071 17.7374 4.26252C17.4092 3.93433 16.9641 3.74995 16.5 3.74995H16.4869C15.7908 3.73783 15.0405 4.07178 14.3447 4.84484C13.8061 5.44328 13.3408 6.26394 12.9998 7.25001H16.4912Z" />
		</SvgIcon>
	);
} );
