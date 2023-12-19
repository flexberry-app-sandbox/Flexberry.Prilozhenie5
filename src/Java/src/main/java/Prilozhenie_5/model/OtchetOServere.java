package Prilozhenie_5.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Prilozhenie_5.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ОтчетОСервере
 */
@Entity(name = "IISPrilozhenie_5ОтчетОСервере")
@Table(schema = "public", name = "ОтчетОСервере")
public class OtchetOServere {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Режим")
    private String режим;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Servernaya")
    @Convert("Servernaya")
    @Column(name = "Серверная", length = 16, unique = true, nullable = false)
    private UUID _servernayaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Servernaya", insertable = false, updatable = false)
    private Servernaya servernaya;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Raspolozhenie")
    @Convert("Raspolozhenie")
    @Column(name = "Расположение", length = 16, unique = true, nullable = false)
    private UUID _raspolozhenieid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Raspolozhenie", insertable = false, updatable = false)
    private Raspolozhenie raspolozhenie;


    public OtchetOServere() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРежим() {
      return режим;
    }

    public void setРежим(String режим) {
      this.режим = режим;
    }


}