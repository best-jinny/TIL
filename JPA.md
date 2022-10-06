*** 영속성 컨텍스트

```java
EntityManager.persist(entity);
```

- 엔티티 조회 : 1차 캐시.  
1차 캐시 -> DB에서 조회

- 영속 엔티티의 동일성 보장

- 엔티티 등록 : 트랜잭션을 지원하는 쓰기 지연
- 엔티티 수정 : 변경 감지(Dirty Checking)

*** Flush : 영속성 컨텍스트의 변경 내용을 db에 반영

default) 커밋이나 쿼리를 실행할 때 플러시

- 영속성 컨텍스트를 비우지 않음
- 영속성 컨텍스트의 변경 내용을 데이터베이스에 동기화
- 트랜잭션 이라는 작업 단위가 중요 -> 커밋 직전에만 동기화 하면 됨

*** Entity Mapping

- 객체와 테이블 매핑 @Entity @Table
- 필드와 컬럼 매핑 @Column
- 기본키 매핑 @Id
- 연관관계 매핑 @ManyToOne @JoinColumn

@Entity
@Entity가 붙은 클래스는 JPA가 관리, 엔티티라 한다
JPA를 사용해서 테이블과 매핑할 클래스는 @Entity 필수

<주의>
- 기본 생성자 필수(파라미터가 없는 public 또는 protected 생성자)
- final 클래스, enum, interface, inner 클래스 사용 X
- 저장할 필드에 final 사용X

*** 데이터베이스 스키마 자동 생성 -> 운영서버에서 사용XXX
