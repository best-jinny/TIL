# TIL

21.11.25

* API를 만들기 위해 총 3개의 클래스가 필요

1. Request 데이터를 받을 Dto(Data Transfer Object : 계층 간 데이터 교환을 위한 객체 - 뷰 템플릿 엔진에서 사용할 객체, Repository Layer에서 결과로 넘겨준 객체.. )

2. API 요청을 받을 Controller(외부 요청과 응답 처리)

3. 트랜잭션, 도메인 기능 간의 순서를 보장하는 Service(controller와 dao의 중간 영역)


* 스프링에서 Bean을 주입받는 방식

1. @AutoWired
2. setter
3. 생성자 -> 가장 권장

@RequiredArgsConstructor -> final이 선언된 모든 필드를 인자값으로 하는 생성자를 대신 생성

생성자를 직접 안쓰고 롬복 어노테이션을 사용하는 이유? 
해당 클래스의 의존성 관계가 변경될 때마다 생성자 코드를 계속 수정하는 번거로움 해결


