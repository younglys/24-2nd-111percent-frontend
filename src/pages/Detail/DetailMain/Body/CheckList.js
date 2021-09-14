import React from 'react';
import styled from 'styled-components';

function CheckList() {
  return (
    <Wrapper>
      <H1>심사 체크리스트</H1>
      <Table>
        <Thead>
          <tr>
            <th>체크리스트</th>
            <td>확인방법</td>
            <td>확인</td>
          </tr>
        </Thead>
        <Tbody>
          <tr>
            <th>본인확인</th>
            <td>주민등록등본, 실명확인증표, 인감증명서</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>권리관계 확인</th>
            <td>
              전입세대 열람원, 국세납세증명서, 지방세납세증명서 *임대차 있을 시
              추가 확인: 임대차계약서, 임대차확인서, 무상거주확인서
            </td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>신용정보 확인</th>
            <td>KCB 신용정보조회, 사기 감별 자체 시스템 조회</td>
            <td>✔️</td>
          </tr>
          <tr>
            <th>자격 및 상환능력 확인 - 근로소득자</th>
            <td>재직증명서, 건강보험자격득실확인서, 직전년도 원천징수영수증</td>
            <td>✔️</td>
          </tr>
        </Tbody>
      </Table>
    </Wrapper>
  );
}

export default CheckList;

const Wrapper = styled.div`
  margin-bottom: 8rem;
`;

const H1 = styled.h1`
  margin-bottom: 3rem;
  color: ${props => props.theme.black};
  font-size: 2.2rem;
  letter-spacing: -0.05rem;
  line-height: 1.27;
`;

const Table = styled.table`
  width: 100%;
  padding: 2rem;
  border-collapse: collapse;
  color: #858d94;

  th {
    width: 20%;
    background-color: #f8f9fa;
    text-align: start;
    font-weight: 400;
  }

  td:last-child {
    width: 10%;
    border-right: none;
    text-align: center;
  }

  th,
  td {
    border: 1px solid #dee2e6;
    border-left: none;
    font-size: ${props => props.theme.smallFont};
    line-height: 2.4rem;
    letter-spacing: -0.06rem;
  }
`;

const Thead = styled.thead`
  th,
  td {
    padding: 1rem 2rem;
  }
`;

const Tbody = styled.tbody`
  th,
  td {
    padding: 1.5rem 2rem;
    vertical-align: middle;
  }

  th {
    color: #4b525a;
    font-size: ${props => props.theme.middleFont};
    line-height: 2.4rem;
    letter-spacing: -0.04rem;
  }

  td {
    white-space: pre-wrap;
  }
`;
